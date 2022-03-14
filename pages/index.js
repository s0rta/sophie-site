import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import Link from 'next/link'

export default function Home({ images }) {
  const getRandomMask = () => {
    return 'photo-mask'
  }

  const getRandomPos = () => {
    return 'photo-pos--' + Math.floor(Math.random() * 5)
  }

  const getRandomLeftMargin = () => {
    return { marginLeft: Math.floor(Math.random() * 500) }
  }

  const getRandomTopMargin = () => {
    return { marginTop: Math.floor(Math.random() * 500) }
  }

  return (
    <div className="container custom-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title index-title">Home to the work of Sophie Cole</h1>
        <div className="imageWrap">
          {images.map((image, index) => {
            return (
              <div
                className={
                  'photo-masked--wrap ' + getRandomMask() + ' ' + getRandomPos()
                }
                style={{
                  marginTop: Math.floor(Math.random() * 400) + 'px',
                  marginLeft: Math.floor(Math.random() * 400) + 'px'
                }}
              >
                <Link href={`/images/${image.split('.')[0]}-page`}>
                  <a>
                    <Image
                      src={'/images/' + image}
                      key={index}
                      width={328}
                      height={226}
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </main>

      <style jsx>
        {`
          main {
            height: 100vh;
            overflow: auto;
          }

          .index-title {
            position: sticky;
            top: calc(100vh - 65px);
            padding: 8px;
            color: rgba(21, 23, 25, 0.79);
            width: 330px;
            left: 0;
            z-index: 2;
          }

          .imageWrap {
            display: grid;
            width: 220vw;
            grid-template-columns: repeat(4, auto);
            grid-template-rows: repeat(8, auto);
            margin-top: 21px;
            grid-gap: 12px;
          }

          @media only screen and (max-width: 1000px) {
            .imageWrap {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
            }

            .photo-masked--wrap {
              margin: 0px !important;
              justify-self: center;
            }
          }

          @media only screen and (max-width: 500px) {
            .imageWrap {
              grid-template-columns: 1fr;
            }
          }

          .photo-masked--wrap {
            justify-self: center;
          }
          .photo-masked--wrap {
          }
          .photo-pos--0 {
            align-self: end;
            jusify-self: start;
          }

          .photo-pos--1 {
            align-self: start;
            jusify-self: end;
          }

          .photo-pos--2 {
            align-self: center;
          }

          .photo-pos--3 {
            align-self: end;
          }

          .photo-pos--4 {
            align-self: start;
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
