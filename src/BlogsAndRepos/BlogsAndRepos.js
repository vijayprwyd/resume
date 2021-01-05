import React from "react";

export function BlogsAndRepos() {
  return (
    <div className="box">
        <h2>Blogs And Repos</h2>
        <hr/>
      <ol>
        <li>
          <span>Polyfill For promises - </span> 
          <a href="https://dev.to/vijayprwyd/polyfill-for-promises-1f0e" target = "_blank">
            Blog Link
          </a>
        </li>
        <li>
          <span>Multiplayer Chess game - </span>
          <a href="https://github.com/vijayprwyd/js-chess-board" target="_blank">
            Github Repo 
          </a>
          <span> and </span>
          <a href = "https://if092.csb.app/" target="_blank">  Live Demo </a>
        </li>
      </ol>
    </div>
  );
}
