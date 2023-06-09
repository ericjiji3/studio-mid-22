import Image from 'next/image';
import Ming from '../../public/images/about/ming.jpg';
import Michelle from '../../public/images/about/michelle.jpg';
import Eric from '../../public/images/about/eric.jpeg';
import { motion,AnimatePresence } from "framer-motion";

export default function About(){
    return(
        <div className="about">
            
            <div className="profile ming">
                            <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="image-container"
                >
                <div >
                    <Image src={Ming} width={700} height={500} alt="oops"/>
                </div>
                </motion.div>
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="text-container"
                >
                <div >
                    <h2>Mingjian Dan</h2>
                    <span>Co-Owner</span>
                    <div className="content">
                        <span>Mingjian Dan, our Head Photographer, is passionate about conveying stories and abstract concepts through his lens. With a great interest in the arts from a young age, his creative journey started with his love of drawing and writing as a child. Those initial interests of visual arts and storytelling began to combine and develop into filmmaking and photography. He continued honing in on his skills as he completed his Bachelor’s in Film at the University of Texas. Postgrad, he took a detour in his career and life path to pursue the “safe” route, but felt drained. Through these experiences, he realized that pursuing his creativity was really the only way he could live. With this newfound mindset and the start up of Mid22 with his childhood friend, he has set out to bring his creative visions to life and to grow our platform to better serve and support the artist community around him.</span>
                    </div>
                </div>
                </motion.div>
            </div>
            <div className="profile michelle">
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="image-container"
                >
                <div>
                    <Image src={Michelle} width={700} height={500} alt="oops"/>
                </div>
                </motion.div>
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="text-container"
                >
                <div >
                    <h2>Michelle Ngo</h2>
                    <span>Co-Owner</span>
                    <div className="content">
                        <span>Known as a jack of all trades as a child, Michelle Ngo, our Founder was always busy entertaining her never-ending interests from tennis, dance, and swim to piano, theatre, and sewing. However, through it all, her deepest passions remained in creating art and music. She went on to earn her Bachelor’s in Early Childhood Special Education at Texas Christian University, but has always said her real learning began after that. Postgrad, she moved abroad to Spain, where she got the chance to learn about the world and do some soul-searching first hand through her travels. These experiences inspired her to live a life that would set her free, which led her to pursue her music career as “Thuy Vi” a Singer-Songwriter and to the startup of her first business with her best friend, Ming. Through Mid22, she aims to connect with like-minded artists to foster a loving, supportive, & collaborative community, while maintaining a personal goal of continually developing her creativity every day.</span>
                    </div>
                </div>
                </motion.div>
            </div>
            <div className="profile eric">
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="image-container"
                >
                <div>
                    <Image src={Eric} width={700} height={500} alt="oops"/>
                </div>
                </motion.div>
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    }}
                    className="text-container"
                >
                <div>
                    <h2>Eric Ji</h2>
                    <span>Web</span>
                    <div className="content">
                        <span>You may be thinking, “Wow! This website looks great!”, well you can thank our Website Developer, Eric Ji, for that! As a child, he was a self proclaimed nerd spending most of his time playing video games like Minecraft and League of Legend and training competitively in Tennis with Michelle. Later on, our designated smartypants earned his Bachelor’s in Neuroscience with a minor in Computer Science at the University of Texas, meeting Ming along the way. Postgrad, he decided to pursue a career in Website development, inspired by the cool visuals and designs of his favorite childhood video games. He continues to stay motivated by the idea of being able to use his passion of website design to bring his client’s visions to life and to showcase what they love to do. He is excited to work in collaboration with his friends to bring Mid22 to life and to you.</span>
                    </div>
                </div>
                </motion.div>
            </div>
            
        </div>
    )
}