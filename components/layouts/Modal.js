import tw from "@tailwindcssinjs/macro"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"
import styled from "styled-components"
import useOnClickOutside from "../../hooks/useOutsideClick"

const Wrapper = styled(motion.div)`
	${tw`fixed h-screen w-screen flex items-end md:items-center justify-center z-999 top-0 left-0`};
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(2px);
`

const ModalContainer = styled(motion.div)`
	${tw`absolute rounded-t-4 md:rounded-4 bg-white inset-y-auto inset-x-auto overflow-y-scroll`};
	min-height: 40vh;
	max-height: 62vh;
	width: 100vw;
	background: white;

	@media (min-width: 768px) {
		width: 80vw;
		min-height: 40vh;
		height: auto;
	}
	@media (min-width: 1024px) {
		width: 60vw;
		min-height: 40vh;
		height: auto;
	}
`

const variants = {
	hidden: {
		opacity: 0,
		// when: "afterChildren",
		// staggerChildren: 0.5,
		transition: {
			type: "tween",
			delay: 0.3,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
}

const CardVariants = {
	hidden: {
		opacity: 0,
		y: 200,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			delay: 0.2,
		},
	},
}

const Modal = props => {
	const modal = useRef()

	useOnClickOutside(modal, () => props.onClose())
	// useOnClickOutside(modal, () => alert("Outside CLick"))

	return (
		<AnimatePresence>
			{props.isActive && (
				<Wrapper
					variants={variants}
					initial={"hidden"}
					animate={"visible"}
					exit={"hidden"}
					key="background">
					<ModalContainer
						style={{ width: props.containerWidth }}
						ref={modal}
						key="modal"
						variants={CardVariants}
						initial={"hidden"}
						animate={props.isActive ? "visible" : "hidden"}>
						{props.children}
					</ModalContainer>
				</Wrapper>
			)}
		</AnimatePresence>
	)
}

export default Modal
