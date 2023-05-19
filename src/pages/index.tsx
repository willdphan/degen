import { FC } from 'react'
import Menu from 'src/components/Menu'
import Profile from 'src/components/Profile'
import Learnings from 'src/components/Learnings'
import Projects from '@/components/Experiments'
import Crafts from 'src/components/Crafts'
import Bio from 'src/components/Bio'

const Home: FC = () => {
	return (
		<div className="flex flex-col items-center  bg-white w-full min-h-screen ">
	<div className='max-h-[55vh] flex flex-col pl-10 lg:pl-0 lg:flex-row pt-28 w-full justify-center ' >
		
			<h3 className='hidden lg:block text-black uppercase font-Mono xl:mr-36 pt-2 text-lg'>William Phan</h3>
			<div>
				<h1 className='mb-64 mt-28 ml-5 lg:mt-0 lg:pl-10 justify-center text-3xl lg:text-5xl text-gray-300 bg-blue font-Mono  uppercase max-w-[22em] lg:max-w-[17em] mr-5 leading-relaxed sm:leading-loose font-normal transition-all' > 
				Choose the most suitable blockchain for your needs. Just connect wallet for creation.<a className='text-black hover:bg-black hover:text-white '><a className='sm:hidden'><br /></a> Enter Here.</a> </h1>
				{/* <div className='space-x-10'>
				<input className="mb-64 mt-10 bg-gray-200 py-5 pl-4 pr-28 placeholder:font-IBM" type="text" placeholder="ENTER ADDRESS..." />
				<button className='bg-black py-4 px-10 text-lg uppercase'>
					Enter
				</button>
				</div> */}
				</div>
				</div>


				<div className='flex flex-col lg:flex-row w-full lg:min-h-[45vh] text-black text-4xl font-Mono uppercase max-w-[100vw]'>
					
				<div className='flex flex-row min-h-[22.5vh] w-full '>
					
				<div className="w-1/2  flex flex-col group ">
				<h1 className="pl-5 pt-5 h-[90%] flex  group-hover:bg-black group-hover:hidden text-3xl lg:text-5xl rounded-tr-3xl mx-1 font-light">Connect</h1>
				<div className='group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl '>
				<svg className=" hidden group-hover:block lg:w-[30%] lg:group-hover:h-[30%] group-hover:h-[40%] w-[40%] bg-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z" fill="rgba(255,255,255,1)"></path></svg>
				</div>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-5 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all ">Email</p>
</div>

<div className="w-1/2  flex flex-col group ">
				<h1 className="pl-5 pt-5 h-[90%] flex  group-hover:bg-black group-hover:hidden text-3xl lg:text-5xl rounded-tr-3xl mx-1 font-light">Connect</h1>
				<div className='group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl '>
				<svg className=" hidden group-hover:block lg:w-[30%] lg:group-hover:h-[30%] group-hover:h-[40%] w-[40%] bg-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z" fill="rgba(255,255,255,1)"></path></svg>
				</div>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-5 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all ">Email</p>
</div>
</div>
				<div className='flex flex-row min-h-[22.5vh] w-full'>
					
				<div className="w-1/2  flex flex-col group ">
				<h1 className="pl-5 pt-5 h-[90%] flex  group-hover:bg-black group-hover:hidden text-3xl lg:text-5xl rounded-tr-3xl mx-1 font-light">Connect</h1>
				<div className='group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl '>
				<svg className=" hidden group-hover:block lg:w-[30%] lg:group-hover:h-[30%] group-hover:h-[40%] w-[40%] bg-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z" fill="rgba(255,255,255,1)"></path></svg>
				</div>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-5 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all ">Email</p>
</div>

<div className="w-1/2  flex flex-col group ">
				<h1 className="pl-5 pt-5 h-[90%] flex  group-hover:bg-black group-hover:hidden text-3xl lg:text-5xl rounded-tr-3xl mx-1 font-light">Connect</h1>
				<div className='group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl '>
				<svg className=" hidden group-hover:block lg:w-[30%] lg:group-hover:h-[30%] group-hover:h-[40%] w-[40%] bg-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z" fill="rgba(255,255,255,1)"></path></svg>
				</div>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-5 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all ">Email</p>
</div>
</div>
					
					
			
					
				</div>
			</div>
			
	)
}

export default Home
