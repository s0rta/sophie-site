import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { image } = router.query

  return (
    <article className="container">
      <div>
        {image && (
          <div className="image-wrap">
            <h1>Untitled</h1>
            <Image
              width="600"
              height="500"
              objectFit="contain"
              src={'/images/' + image.split('-')[0] + '.jpg'}
            />
            <Link href="/">
              <a>Continue exploring</a>
            </Link>
          </div>
        )}
        <style jsx>{`
          a {
            text-decoration: underline;
            font-size: 18px;
          }
          h1 {
            font-size: 2.25rem;
            color: #1a202c;
            margin-bottom: 0;
            align-self: flex-start;
          }
          .image-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>
    </article>
  )
}

export default Post
