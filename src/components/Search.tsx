import React from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState();
  const navigate = useNavigate();

  // debouncing
  React.useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm) {
        navigate(`/search?searchQuery=${searchTerm}`);
      }
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [searchTerm, navigate]);

  function handleChange(event: any) {
    setSearchTerm(event.target.value);
    // navigate(`/search?searchQuery=${event.target.value}`);
  }

  return (
    <div id="search">
      <label>Search</label>
      <input type="text" name="search" onChange={handleChange} />
    </div>
  );
}
