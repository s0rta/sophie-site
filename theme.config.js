import Link from 'next/link'

export default {
  prevLinks: false,
  nextLinks: true,
  back: false,
  head: <></>,
  footer: (
    <div style={{ marginTop: '8rem' }}>
      <div>
        <Link href="/">
          <a>Continue Exploring</a>
        </Link>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
        p {
          font-size: 1.2rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  )
}
