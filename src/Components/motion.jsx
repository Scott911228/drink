import { motion } from "framer-motion";

const MotionDiv = ({children, className}) => {
    return(
        <motion.div
            className={className}
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition = {{duration:1}}
        >
            {children}
        </motion.div>
    )
}

export default MotionDiv;