"use client"
import { motion } from "framer-motion"
import {useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signOut, useSession,getProviders} from 'next-auth/react'
import TemporaryDrawer from '@components/Drawers/Drawer'
import TemporaryDrawerLogged from './Drawers/DrawerLogged'
function Nav() {
    const {data:session}= useSession();
    const [providers,setProviders]=useState(null);
   
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(()=>
    {
const setUpProviders=async ()=> {
    const response = await getProviders();
    setProviders(response);
}
setUpProviders();
    },[])
  return (
    <nav
      className={`w-full flex-between pt-3 sticky top-0 backdrop-blur-md z-20 ${
        scrolled ? 'bg-white border border-gray-200 bg-opacity-60' : 'bg-transparent border-none'
      }`}
    >
<Link href="/" className='flex gap-2 flex-center'>
    <Image src="/assets/images/pitchini-website.png"
    alt="Our logo"
    width={150}
    height={60}
    className='object-contain  sm:mb-4  sm:ml-16'/>
   
</Link>

{/* Desktop navigation */}
<div className='sm:flex hidden mr-16'>
    {session?.user ? (
        <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt"
            className='outline_orange_btn'>Workspace</Link>
            <button type="button" onClick={signOut}
            className='black_btn'>
                Sign Out
            </button>
            <Link href="/profile">
                <Image src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'/>
            </Link>
        </div>
    ):(
        <>
        {providers && Object.values(providers).map((provider) => (
            <>
            <div className='flex-between gap-3 md:gap-10'>
           
            <Link href="/profile">
            < motion.div whileHover={{ scale: 1.2 }}>
                Policies
            </motion.div>
            </Link>
            <Link href="/profile">
            < motion.div whileHover={{ scale: 1.2 }}>
                Discover
            </motion.div>
            </Link>
            <Link href="/contact">
            < motion.div whileHover={{ scale: 1.2 }}>
                Contact
            </motion.div>
            </Link>
            <Link href="/login">
                <motion.button
                whileHover={{ scale: 1.2 }}
                type='button'
                
                className='outline_orange_btn_no_border'>
                 Login 
                </motion.button>
                </Link> 
                <Link href="/register">
                <motion.button
                whileHover={{ scale: 1.2 }}
                type="button"
                className='black_btn'>
                 Join  
                </motion.button>
                </Link>
                </div>
                </>
            ))
        }
        </>
    )}
</div>
{/* Mobile navigation */}
<div className='sm:hidden flex relative '>
    {session?.user ? (
        <div className='flex'>
          
             <Image src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              
                />
               <TemporaryDrawerLogged />
        </div>
    ):( <>
    
        {providers && Object.values(providers).map((provider) => (
            <TemporaryDrawer>
                {/* <button
                type='button'
                key={provider.name}
                onClick={()=>signIn(provider.id)}
                className='black_btn'>
                    Sign In
                </button> */}
                </TemporaryDrawer>
            ))
        }
        </>)}

</div>
    </nav>
  )
}

export default Nav