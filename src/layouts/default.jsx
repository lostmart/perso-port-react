import React, { Fragment } from 'react'

import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Media from 'react-media'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LightBox from '../components/LighBox'
import Card from '../components/Card'

// light imports
import { mainLight, secLight } from '../components/lightInsances/lights.js'

// screen sizes
import SmallScreen from './SmallScreen'
import LargeScreen from './LargeScreen'

const Root = () => {
	return (
		<Media
			queries={{
				small: '(max-width: 767px)',
				large: '(min-width: 768px)',
			}}>
			{(matches) => (
				<Fragment>
					{matches.small && <SmallScreen />}
					{matches.large && <LargeScreen />}
				</Fragment>
			)}
		</Media>
	)
}

export default Root
