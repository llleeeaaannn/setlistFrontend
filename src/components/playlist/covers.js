import styles from '../../styles/playlist.module.css';

const Covers = ({ songs, copySong }) => {

  return (
    <div className={styles.cover}>
      <h3>There { songs.length === 1 ? `was also ${songs.length} cover` : `were also ${songs.length} covers` } on the setlist which { songs.length === 1 ? `wasn't` : `weren't`} included in the playlist:</h3>
      <div className={styles.coverList}>
        { songs.map((song, i) => (
          <div key={i}>
            <span>{ song.name } by { song.artist }</span>
            <svg onClick={() => copySong(song)} width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Covers
