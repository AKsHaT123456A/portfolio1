import React, { useEffect, useRef } from "react";
import eye from "../../../public/eye.jpg";
import ContactFormComponent from "./ContactFormComponent";
import Image from "next/image";

const ContactForm = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (divRef.current) {
      updateCursor(event);
      eyeball(event);
    }
  };

  const updateCursor = (event: MouseEvent) => {
    const divRect = divRef.current?.getBoundingClientRect();
    if (divRect === undefined) return;
    const isMouseInDiv =
      event.clientX >= divRect.left &&
      event.clientX <= divRect.right &&
      event.clientY >= divRect.top &&
      event.clientY <= divRect.bottom;

    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    if (cursor) {
      cursor.style.display = isMouseInDiv ? "block" : "none";
      cursor.style.left = event.clientX - divRect.left + "px";
      cursor.style.top = event.clientY - divRect.top + "px";
    }
  };

  const eyeball = (event: MouseEvent) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      const eyeElement = eye as HTMLElement;
      let x = eyeElement.getBoundingClientRect().left + eyeElement.clientWidth / 2;
      let y = eyeElement.getBoundingClientRect().top + eyeElement.clientHeight / 2;
  
      // Calculate the angle relative to the center of the eye
      let angle = Math.atan2(event.clientY - y, event.clientX - x);
      angle = angle * (180 / Math.PI);
  
      // Apply rotation to the eye
      eyeElement.style.transform = `rotate(${angle}deg)`;
    });
  };
  

  const handleMouseLeave = () => {
    hideCursor();
  };

  const hideCursor = () => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    if (cursor) {
      cursor.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    divRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      divRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-8xl grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div ref={divRef} className="cursor-custom relative flex h-[100vh] bg-[aliceblue] flex-col" id="anchor">
        <div className="custom-cursor absolute w-12 h-12 bg-black rounded-full z-100"></div>
        <div className="z-[0]">
          <div className="todo" id="todo">
            <div className="thought w-[25rem] h-[8rem] absolute top-[3rem] left-[30%]">
              <div>Gi</div>
            </div>
            <div className="dog absolute z-2 left-[-4rem] bottom-[40%]">
              <span className="leg3"></span>
              <div className="body">
                <span className="cola"></span>
                <span className="leg"></span>
              </div>
              <div className="cabezota">
              <div className="tongue">
                <div className="border-t-2 relative w-[0.5px] bg-black bottom-[-14px] h-[2rem] left-4"/>
              </div>
                <div className="orejas">
                  <span className="orejitas"></span>
                </div>
                <div className="orejas3">
                  <span className="orejitas3"></span>
                </div>
                <div className="cabeza">
                  <span className="cabeza3"></span>
                  <span className="ojos">
                  <Image src={eye} alt="Eyes" className=" eye  h-[0.6rem] w-[0.8rem] mt-[0.6rem] ml-[0.25rem] rounded-[50%]" />
                  </span>
                  <span className="ojos mx-[3.8rem] my-[0.08rem] top-[4rem] left-[1rem]">
                    
                    <Image src={eye} alt="Eyes" className="eye  h-[0.6rem] w-[0.8rem] mt-[0.6rem] ml-[0.25rem] rounded-[50%]" />
                    <div className="h-[0.4rem] w-[0.4rem] rounded-[50%]"></div>
                  </span>
                  <span className="nariz"></span>
                  <span className="nariz3"></span>
                </div>
              </div>
              <div className="canasta"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer justify-center">
        <ContactFormComponent />
      </div>
    </div>
  );
};

export default ContactForm;
