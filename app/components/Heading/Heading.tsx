import { GithubIcon, RemixLogo } from '../icons';
import './Heading.css';

export default function Heading() {
  return (
    <>
      <div className='Heading'>
        <h1>Search guitar chords</h1>
        <div>
          powered by{' '}
          <a
            href='https://typesense.org/'
            target='_blank'
            rel='noopener noreferrer'
            id='typesense'
          >
            type<b>sense</b>|
          </a>{' '}
          & <RemixLogo id='remixLogo' />
        </div>
      </div>
      <a
        href='https://github.com/typesense/showcase-guitar-chords-search-remix'
        target='_blank'
        rel='noopener noreferrer'
        id='githubLink'
        title='Github repo'
      >
        <GithubIcon />
      </a>
    </>
  );
}
