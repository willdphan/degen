import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from 'public/images/profile.jpeg'
import { useState } from 'react'
import personal from 'public/images/personal.png'

const Profile = () => {
	const [isHovering, setIsHovered] = useState(false)
	const onMouseEnter = () => setIsHovered(true)
	const onMouseLeave = () => setIsHovered(false)
	return (
		<div className="flex flex-row items-center space-x-5 lg:space-x-5 absolute bottom-20 lg:bottom-20">
			{/* <Image alt="image" className=" aspect-square rounded-full " height={50} width={50} src={profile} /> */}
			<div
				className="flex items-center flex-shrink-0 cursor-pointer lg:mr-2"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{isHovering ? (
					<Image className="aspect-square rounded-full " src={profile} height={75} width={75} alt="logo" />
				) : (
					<Image className=" aspect-square rounded-full " src={personal} height={75} width={75} alt="logo" />
				)}
			</div>
			<div className="flex space-x-2 sm:space-x-10">
				{/* FIRST LINK */}
				<h1 className="scroll font-Sans text-sm cursor-pointer flex items-center space-x-2">
					<svg
						className="hidden sm:block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20"
						height="20"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
					<Link href="https://twitter.com/willdphan">
						<div className=""> Twitter</div>
					</Link>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
				</h1>
				{/* SECOND LINK */}
				<h1 className="scroll font-Sans text-sm cursor-pointer flex items-center space-x-2">
					<svg
						className="hidden sm:block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20"
						height="20"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
					<Link href="https://github.com/willdphan">
						<div className=" "> Github</div>
					</Link>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
				</h1>
			</div>
		</div>
	)
}

export default Profile

{
	/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
						fill="rgba(255,255,255,1)"
					/>
				</svg> */
}