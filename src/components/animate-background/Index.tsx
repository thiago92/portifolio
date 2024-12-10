import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"

export default function Particle() {

  const [init, setInit] = useState(false)

  useEffect(() => {
    console.log("init")

    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: any): Promise<void> => {
    console.log("Particles Loaded", container);
    return Promise.resolve();
  }

  return (
    <>
      <section>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{
              zIndex: 1,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            options={{
              fpsLimit: 120,
              background: {
                color: {
                  value: "#000",
                },
                image: "url('./logo.png')",
                position: "95% 50%",
                repeat: "no-repeat",
                size: "45%",
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  //resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ca8a04",
                },
                links: {
                  color: "#ca8a04",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1.2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    //area: 800,
                  },
                  value: 160,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: {
                    min: 1,
                    max: 5,
                  },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </section>
    </>
  );
}

