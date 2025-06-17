import React from 'react';
import design from '../Styles/CssModules.module.css'

function CssModules(props) {
    return (
        <div>
            <h1>This is css modules page in react app</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <div>

                <figure>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzQTCLaEuWpX5betODSw635Q-V8tdKrY5DA&s'></img>

                    <figcaption>Flow diagram of react</figcaption>

                </figure>

            </div>

            <div>
                <ul>Frontend Technologies:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                </ul>
            </div>

            <div>
                <form>
                     <label>Email:</label>
                     <input type="email"></input> <br></br>

                     <label>Password:</label>
                     <input type="password"></input> <br></br>

                     <input type="reset">Reset</input>
                     <input type="submit">Submit</input>
                </form>
            </div>
            <CssModules/>
        </div>
    
    );
}

export default CssModules;






