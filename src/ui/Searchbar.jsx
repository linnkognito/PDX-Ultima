import { useState } from 'react';
import FormRow from './FormRow';
import Input from './Input';

function Searchbar({ searchFor = null, disabled = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

  function handleSearchQuery(e) {
    const value = e.target.value;
    setSearchQuery(value);

    const results = searchFor.filter((hit) =>
      hit.name
        ? hit.name.startsWith(searchQuery)
        : hit.title.startsWith(searchQuery)
    );

    setSearchResults(results);
    console.log(searchResults); // FIX
  }

  return (
    <FormRow htmlFor='search' label='Search'>
      <Input
        id='search'
        disabled={disabled}
        placeholder='Start typing to search'
        onChange={handleSearchQuery}
      />
    </FormRow>
  );
}

export default Searchbar;
