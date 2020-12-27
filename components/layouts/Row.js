import tw from "@tailwindcssinjs/macro"
import styled from "styled-components"

const Wrapper = styled.div`
	${tw`flex flex-wrap items-center mx-auto w-full md:px-2 lg:px-4`};
	max-width: 100%;
	@media (min-width: 768px) {
		max-width: ${p =>
			p.narrow ? "calc(100vw - (100vw / 5))" : "calc(100vw - (100vw / 12))"};
		${p => p.narrow && tw`px-8`}
	}
`

const Row = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Row
