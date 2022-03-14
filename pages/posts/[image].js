import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { image } = router.query

  return (
    <div>
      <h1>{image.split('-')[0]}</h1>
      <Image
        width="500"
        height="500"
        objectFit="contain"
        src={'/images/' + image?.split('-')[0] + '.jpg'}
      />
      <Link href="/">
        <a>continue exploring</a>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}

export default Post
