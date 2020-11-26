import React from 'react'
import { SearchIcon, SpinnerIcon } from '@chakra-ui/icons'
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

interface Props {
  search: string
  setSearch: (value: string) => void
  isSearchLoading: boolean
  setIsSearchLoading: (value: boolean) => void
}
const SearchInput: React.FC<Props> = ({
  search,
  setSearch,
  isSearchLoading,
  setIsSearchLoading
}) => {
  const router = useRouter()

  return (
    <>
      {isSearchLoading && <SpinnerIcon w={4} h={4} ml="4" color="gray.300" />}

      <FormControl
        as="form"
        mr="16"
        onSubmit={event => {
          event.preventDefault()
          setIsSearchLoading(true)

          router.push(`/articles?s=${search}`)

          setTimeout(() => setIsSearchLoading(false), 600)
        }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />

          <Input
            type="search"
            placeholder="Search ..."
            variant="flushed"
            size="sm"
            value={search}
            onChange={event => setSearch(event.target.value)}
            isLoading={isSearchLoading}
          />
        </InputGroup>
      </FormControl>
    </>
  )
}

export default SearchInput
