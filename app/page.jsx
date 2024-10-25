"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Typewriter from "typewriter-effect"


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as necessary (1000 ms = 1 second)

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
    <section className="h-full">
      <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-20">
              {/*-------------Text---------------------*/}
              <div className="text-center xl:text-left order-2 xl:order-none">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      Hello I&#39;m <br/>
                      <span className="text-accent text-3xl md:text-4xl lg:text-5xl font-bold">
                        Zakaria Coulibaly
                      </span>
                  </h1>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">I&#39;m a</p>
                  <span className="text-accent text-3xl md:text-4xl lg:text-5xl font-bold">
                      {!loading && (
                      <Typewriter
                          options={{
                              strings: ['Software & ML Engineer'],
                              autoStart: true,
                              loop: true,
                          }}
                      />
                      )}
                  </span>
                  <p className="max-w-[500px] mb-9 text-white/80">
                      I specialize in crafting sophisticated digital experiences using various programming languages and
                      technologies.
                  </p>
                  {/*------------- Btn and socials ---------------------*/}
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                      {/*------------- Btn for downloading CV ---------------------*/}
                      <a href="" download="Zakaria_Coulibaly_Resume.pdf">
                          <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                              <span>Download CV</span>
                              <FiDownload className="text-xl"/>
                          </Button>
                      </a>
                      {/*------------- Social Media Icons --------------------*/}
                      <div className="mb-8 xl:mb-0">
                          <Social
                              containerStyles="flex gap-6"
                              iconStyles="w-9 h-9 border border-accent rounded-full
                          flex justify-center items-center text-accent text-base hover:bg-accent
                          hover:text-primary hover:transition-all duration-500"
                          />
                      </div>
                  </div>
              </div>
              {/*------------- Photo ---------------------*/}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                  <Photo/>
              </div>
          </div>
      </div>
        {/*------------- Photo ---------------------*/}
        <Stats/>
    </section>

  );
}

export default Home;
