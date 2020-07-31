import * as React from "react";

export function Footer() {
  const commit = process.env.REACT_APP_TRAVIS_COMMIT;
  const commitUrl = "https://github.com/shepherdjerred/better-skill-capped/commit/" + commit;
  const releaseMessage = commit !== undefined ? <a href={commitUrl}>{commit.substr(0, 7)}</a> : "unknown";
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Better Skill Capped by <a href="https://shepherdjerred.com/">Jerred Shepherd</a>.
          <br />
          All content is property of <a href="https://www.skill-capped.com/">Skill Capped</a>.
          <br />
          This project is in no way endorsed or affiliated with Skill Capped.
          <br />
          Source available on <a href="https://github.com/shepherdjerred/better-skill-capped">GitHub</a>. Licensed under
          the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPLv3</a>.
          <br />
          Release {releaseMessage}
        </p>
      </div>
    </footer>
  );
}
