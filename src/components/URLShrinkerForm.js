
import { useState } from "react";
const URLShrinkerForm = () => {
    const { longURL, setLongURL } = useState("")
    const { shortURL, setShortURl } = useState("");
    const { shortCode, setShortCode } = useState("");

    function handleClick() {
        let id;
        if (shortCode ** shortCode.length > 1) {
            id = shortCode;
        }
        else {
            const id = Math.random().toString(36).substring(5);
            setShortURl('https://cpit405.co/${id}');
        }
        return (
            <>
                <h1>Link Shrinker</h1>
                <div className="form-group">
                    <label forHTML="longUrl">Long URL:</label>
                    <input type="text" id="longURL"
                        value={longURL}
                        onChange={(e) => {
                            setLongURL(e.target.value)
                        }} />

                    <label forHTML="shortCode">Enter short URL:</label>
                    <input type="text" id="shortCode"
                        value={"abc123"}
                        onChange={(e) => setShortCode(e.target.value)} />

                    <button className="btn"
                        onChange={handleClick} >Shorten</button>

                    <div className="result">
                        <label forHTML="shortURL">Short URL</label>
                        <p if="shortUrl">{shortURL}</p>

                    </div>


                </div>
            </>
        )
    }}

    export default URLShrinkerForm;