import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos esse,
          ducimus dolorum eum nulla deserunt voluptatem accusamus! Velit id,
          quia repellendus necessitatibus nostrum, blanditiis ducimus dolore aut
          eius eligendi, ad maxime illo officiis earum? Temporibus iusto facilis
          quo repellendus? Ut, repudiandae ex perferendis doloremque est itaque
          possimus error. Sit, odit.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          veritatis accusamus vel ullam. Provident debitis maiores excepturi eos
          aspernatur beatae ad distinctio officia nisi sunt, cumque numquam odio
          voluptas, sint, ipsam delectus eum mollitia velit iste sapiente
          impedit veritatis. Commodi sapiente animi nobis veritatis perspiciatis
          fugit, asperiores ipsa quibusdam quod.
        </p>
      </div>
    </div>
  );
}
