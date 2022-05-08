import React from "react";
import Footer from "../Footer/Footer";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container">
      <div className="mt-5 ques">
        <h2>Q-1: Defference between Javascript and Node js.</h2>
        <div className="ans-d mt-3">
          <div>
            <h4>Javascript:</h4>
            <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
            <p>2. Javascript can only be run in the browsers.</p>
            <p>3. It is basically used on the client-side.</p>
            <p>4. Javascript is used in frontend development.</p>
          </div>
          <div>
            <h4>Node js:</h4>
            <p>1. NodeJS is a Javascript runtime environment.</p>
            <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
            <p>3. It is mostly used on the server-side.</p>
            <p>4. Nodejs is used in server-side development.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 ques">
        <h2>Q-2: Defference between SQL and NoSQL.</h2>
        <div className="ans-d mt-3">
          <div>
            <h4>SQL:</h4>
            <p>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</p>
            <p>2. These databases have fixed or static or predefined schema.</p>
            <p>3. These databases are best suited for complex queries.</p>
            <p>4.Vertically Scalable.</p>
          </div>
          <div>
            <h4>NoSQL:</h4>
            <p>1. Non-relational or distributed database system.</p>
            <p>2.They have dynamic schema.</p>
            <p>3. These databases are not so good for complex queries</p>
            <p>4.Horizontally scalable.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 ques">
          <h2>Q-3: What is the purpose of jwt and how does it work?</h2>
          <div className="mt-3 px-3">
               <h4>What is JWT?</h4>
               <p>JWT means JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
               <h4>How JWT Works?</h4>
               <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
