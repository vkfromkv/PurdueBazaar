import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container vh-100 vw-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="container bg-light">
          <h1 className="mt-5">Privacy Policy</h1>

          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as your
            name, email address, and any other information you choose to
            provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We may use the information we collect to communicate with you,
            provide customer support, and improve our website.
          </p>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except
            as required by law.
          </p>

          <h2>4. Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access and use.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact
            us at [your contact information].
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

export default PrivacyPolicy;
