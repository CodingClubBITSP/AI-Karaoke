import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/karaoke.css";
import { Link } from "react-router-dom";

const Karaoke = () => {
    const { songs } = useContext(GlobalContext);
    const [trackIds, setTrackIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await axios.post(
                    "https://accounts.spotify.com/api/token",
                    {
                        grant_type: "client_credentials",
                        client_id: "3d1736b0722c4a729d6b7b0f5bb9ca68",
                        client_secret: "5e8b8368d8be49dc855c8ca0f2965f1e"
                    },
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                );
                localStorage.setItem("token", res.data.access_token);
            } catch (err) {
                console.error("Error fetching token:", err);
                setError(true);
                setLoading(false);
            }
        };

        const fetchTrackIds = async () => {
            if (songs.length > 0) {
                try {
                    const promises = songs.map(async song => {
                        try {
                            const res = await axios.get(
                                `https://api.spotify.com/v1/search?query=${song}&type=track&limit=10&offset=0`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                }
                            );
                            const trackId = res.data.tracks.items[0]?.id;
                            return trackId ? trackId : null;
                        } catch (error) {
                            console.error(
                                "Error fetching track for song:",
                                song,
                                error
                            );
                            return null;
                        }
                    });

                    const ids = await Promise.all(promises);
                    setTrackIds(ids.filter(id => id !== null));
                    setLoading(false);
                } catch (err) {
                    console.error("Error fetching track ids:", err);
                    setError(true);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchToken();
        fetchTrackIds();
    }, [songs]);

    return (
        <div className="h-full flex flex-col justify-center items-center">
            {trackIds.length > 0 ? (
                <div className="player">
                    {trackIds.map((id, index) => (
                        <iframe
                            key={index}
                            src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            height="80"
                        />
                    ))}
                </div>
            ) : (
                <p className="italic mb-2">
                    {loading
                        ? "Fetching songs. Please wait."
                        : error
                          ? "Error loading songs."
                          : "No songs found."}
                </p>
            )}
            <Link
                to="/"
                className="text-default-green font-semibold hover:underline"
            >
                Go back to the home page
            </Link>
        </div>
    );
};

export default Karaoke;
