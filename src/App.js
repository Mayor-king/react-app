import './App.css';

function HelloWorld({name}) {
  return(
    <main>
      <div className='card'>
        <img className='header-img' src="https://th.bing.com/th/id/OIP.UCmz-RcwNEX4onhBt6DH8gHaEo?w=294&h=183&c=7&r=0&o=7&pid=1.7&rm=3" alt='' />
        <p className='tag'>Learning</p>
        <p>Published 21 Dec 2013</p>
        <h1>HTML and CSS Foundation</h1>
        <p className='content'>These Language are the backbone of every website, defing content, structure and presentation</p>

        <div className='profile'>
          <img className='profileImage' src='https://th.bing.com/th?q=Human+Profile+Images+Download&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247' alt='' />
          <p>{name}</p>
        </div>
      </div>
    </main>
  )
}

export default HelloWorld