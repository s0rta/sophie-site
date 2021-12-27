import Head from 'next/head'
import Image from 'next/image'
import path from 'path';
import fs from 'fs';

export default function Home({ images }) {

  const getRandomMask = () => {
    return ("photo-mask--" + Math.floor(Math.random() * 5));
  }


  const getRandomPos = () => {
    return ("photo-pos--" + Math.floor(Math.random() * 5));
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title index-title">
          Home to the work of Sophie Cole
        </h1>
        <div className="imageWrap">
          {images.map((image, index) => {
            return (
              <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}>
                <Image alt="photo of vietnam city" src={'/images/' + image} key={index} width={328} height={226} />
              </div>
            )
          })}


          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}


          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}

          {/* <div className={'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()}> */}
          {/*   <Image alt="photo of vietnam city" src="/images/sohpie-0.jpg" width={328} height={226} /> */}
          {/* </div> */}
        </div>
      </main>

      <style jsx>{`

        main {
          height: 100vh;
          width: 100vw;
          overflow:auto;
        }

        .index-title {
          position: sticky;
          top: calc(100vh - 65px);
          background: white;
          padding:8px;
          width: 330px;
          left:0;
          z-index:2;
        }

        .imageWrap {
          display: grid;
          width: 120vw;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: repeat(3, auto);
          margin-top: 21px;
          grid-gap: 12px;
        }

        .photo-masked--wrap {
          justify-self: center;
        }

        .photo-pos--0 {
          grid-row: 2;
          margin-left: 121px;
          margin-top: 12px;
          align-self: end;
          jusify-self: start;
        
        }

        .photo-pos--1 {
          grid-row: 3;
          margin-left: 162px;
          grid-column-start: span 2;
          margin-top: -12px
        }

        .photo-pos--2 {
          margin-left: 200px;
          align-self: center;
          grid-row-start: span 1; 
          jusify-self: center;
        }

        .photo-pos--3 {
          align-self: end;
          grid-column-start: span 2;
          grid-row-start:span 1;
        }

        .photo-pos--4 {
          align-self: start;
          margin-left: 32px;
          margin-top: 40px;
        }
    `}
      </style>
    </div>
  )
}

export async function getStaticProps() {
  const images = fs.readdirSync(path.join('public', 'images'))

  return {
    props: {
      images: images
    }
  }
}
