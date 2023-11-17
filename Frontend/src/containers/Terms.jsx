import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="container vh-100 vw-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="container bg-light">
          <h1 className="mt-5">Terms and Conditions</h1>

          <p>
            Welcome to our Purdue Bazaar. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which, together with our
            privacy policy, govern our relationship with you in relation to this
            website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </p>

          <h2>2. Privacy Policy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy,
            which can be found at{" "}
            <Link to="/privacy_policy">Privacy Policy</Link>
          </p>

          <h2>3. Copyright</h2>
          <p>
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance, and graphics. Reproduction is prohibited other
            than in accordance with the copyright notice, which forms part of
            these terms and conditions.
          </p>

          <h2>4. Changes to Terms and Conditions</h2>
          <p>
            We may update these terms and conditions from time to time. It is
            your responsibility to review this page periodically to ensure you
            are aware of any changes. Your continued use of the website after
            such changes will constitute your acknowledgment and agreement to be
            bound by the updated terms and conditions.
          </p>

          <h2>5. Contact Information</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at rambo@pb.com.
          </p>
          <div className="mt-3">
            <button
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to Home
            </button>
            <button
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
