import axios from "axios";
import { useEffect, useState } from "react";

export const Git = () => {
  const [name, setName] = useState("");
  const [git, setGit] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/users/lvdins")
      .then((response) => {
        setName(response.data.name);
        setGit(response.data.bio);
        setAvatarUrl(response.data.avatar_url);
        setLocation(response.data.location);
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {name ? (
        <>
          <img
            src={avatarUrl}
            alt="Avatar"
            style={{ width: "200px", marginRight: "10px" }}
          />
          <div>
            <h1>{name}</h1>
            <p>{location}</p>
            <br></br>
            <p>{git}</p>
            <a
              href={`https://github.com/lvdins`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="32"
                width="32"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 6.02 3.74 5.5C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.08C6.66 3.95 7.34 3.92 8 3.92C8.66 3.92 9.34 3.95 9.98 4.08C11.51 3.09 12.18 3.31 12.18 3.31C12.62 4.41 12.34 5.23 12.26 5.5C12.77 6.02 13.08 6.7 13.08 7.58C13.08 10.65 11.2 11.33 9.42 11.53C9.67 11.76 9.87 12.11 9.94 12.6C10.41 12.81 11.56 13.15 12.28 11.94C12.43 11.7 12.88 11.11 13.51 11.12C14.18 11.13 13.78 11.5 13.5 11.65C13.16 11.84 12.77 12.55 12.68 12.78C12.52 13.23 12 14.09 10.03 13.72C10.03 14.39 10.02 15.02 10.02 15.21C10.02 15.42 10.17 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
