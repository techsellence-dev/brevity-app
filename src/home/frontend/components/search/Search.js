

function searchData(search){
    
    if (search != "") {
      const searchedOrders = task.filter((filteredOrders) => {
        return Object.values(filteredOrders)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      return(searchedOrders);
    } else {
      setSearchResult(task);
    }
  };