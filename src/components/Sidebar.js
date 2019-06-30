import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
            
                <div className="App-sidebar-wrapper">

                    <div className="App-sidebar">
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu__item">
                                <NavLink to="/now_playing" activeClassName='is-active'>
                                    <svg width="16" height="19" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"><title>Now Playing</title>
                                        <path d="M10.576 3.368L15.122.74 14.79 0 9.066 1.897 7.953 4.473H0v1.983h1.148L2.708 18.6h7.875l1.56-12.144h1.147V4.473H10.1"></path></svg>
                                    Now Playing
             </NavLink>
                            </li>
                            <li className="sidebar-menu__item">
                                <NavLink to="/popular" activeClassName='is-active'>
                                    <svg width="13" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
                                        <title>Popular</title>
                                        <path d="M12.464 10.663c-.19-2.486-1.348-4.043-2.37-5.418-.944-1.272-1.76-2.37-1.76-3.992 0-.13-.074-.25-.19-.31-.115-.06-.255-.05-.36.027C6.25 2.068 4.97 3.917 4.524 5.68c-.31 1.23-.35 2.61-.357 3.523C2.75 8.9 2.43 6.783 2.427 6.76c-.016-.11-.083-.206-.18-.26-.1-.05-.215-.054-.315-.004-.074.036-1.823.924-1.925 4.47-.007.12-.007.237-.007.356 0 3.445 2.804 6.25 6.25 6.25H6.268c3.438-.01 6.232-2.81 6.232-6.25 0-.174-.036-.66-.036-.66zM6.25 16.877c-1.15 0-2.083-.996-2.083-2.22 0-.04 0-.083.002-.135.013-.516.11-.868.22-1.102.2.432.56.83 1.145.83.192 0 .347-.155.347-.347 0-.495.01-1.065.134-1.58.11-.456.37-.94.703-1.33.146.504.434.913.714 1.312.402.57.818 1.162.89 2.168.005.06.01.12.01.185 0 1.223-.935 2.22-2.084 2.22z">

                                        </path></svg>
                                    Popular</NavLink>
                            </li>
                            <li className="sidebar-menu__item">
                                <NavLink to="/top_rated" activeClassName='is-active'>
                                    <svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><title>Top Rated</title><path d="M14.05 5.947l-2.897 2.825.684 3.99c.05.287-.07.578-.306.75-.132.097-.29.146-.45.146-.12 0-.243-.03-.356-.088L7.14 11.686 3.56 13.57c-.258.136-.57.113-.807-.057-.235-.172-.353-.462-.304-.75l.685-3.99L.233 5.947c-.21-.203-.284-.508-.195-.785.09-.278.33-.48.62-.522l4.005-.582L6.454.428C6.584.164 6.85 0 7.14 0c.293 0 .558.165.688.427l1.792 3.63 4.007.583c.288.042.528.244.617.52.09.28.015.583-.193.787z"></path></svg>
                                    Top rated
                    </NavLink>
                            </li>
                            <li className="sidebar-menu__item">
                                <NavLink to="/upcoming" activeClassName='is-active'>
                                <svg  fill="white" width="15" height="17" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 491.858 491.858" xml="preserve">
<g>
	<g>
		<g>
			<path fill="white" d="M357.714,423.331c0,9.328-10.676,16.891-23.847,16.891H23.847C10.676,440.222,0,432.659,0,423.331V203.735
				c0-9.33,10.676-16.892,23.847-16.892h310.02c13.171,0,23.847,7.564,23.847,16.892V423.331L357.714,423.331z"/>
			<circle cx="89.428" cy="118.706" r="59.619"/>
			<circle cx="253.381" cy="103.801" r="74.524"/>
			<path fill="white" d="M491.858,447.677c0,0-1.986,14.904-15.899,14.904c-13.912,0-103.34-83.42-103.34-94.397V258.882
				c0-10.976,87.443-94.398,103.34-94.398c15.899,0,15.899,14.905,15.899,14.905V447.677z"></path>
		</g>
	</g>
</g>
</svg>
  Upcoming
  </NavLink>
  </li>
                        </ul>
                    </div>
                </div>
           
            </React.Fragment>

        )
    }
}
export default Sidebar;