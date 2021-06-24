import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [people, setPeople] = useState([])
  const [pageNo, setPageNo] = useState(0)
  const [inputPage, setInputPage] = useState() 
  const [showModal, setShowModal] = useState(false)
  const [person, setPerson] = useState()

  const peoplePerPage = 12
  const pagesVisited = pageNo * peoplePerPage
  const pageCount = Math.ceil(people.length / peoplePerPage)
  
  //Change Page
  const changePage = ({selected}) => {
    setPageNo(selected)
    setInputPage(selected + 1)
  }

  //Change Page according to user input
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputPage <= 0 || inputPage > pageCount) {
      alert('No page found')
      return
    }

    const setPage = inputPage - 1
    setInputPage(inputPage)
    setPageNo(setPage)

    console.log('Input page: ' + inputPage) 
    console.log('Page No: ' + pageNo)
  }

  //Open Modal
  const openModal = (person) => {
    setPerson(person)
    setShowModal(prev => !prev) 
  }

  //Fetch Data
  const fetchPeople = async () => {
    const res = await fetch ('https://randomuser.me/api/?results=240')
    const data = await res.json()
    console.log(data.results) 
    setPeople(data.results)
  }

  //Display data from API
  const displayContent = people.slice(pagesVisited, pagesVisited + peoplePerPage).map((person) => {
    return (
      <>
        <Card key={person.login.uuid} person={person} openModal={openModal} /> 
      </>
    )
  })

  return (
    <div className='container'>
      <h1 className='title'>Random People</h1>
      {people.length > 0 ? 
      <>
        <div className='content wrap'>
          {displayContent}  
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} person={person} />  
        <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            pageCount={pageCount}
            onPageChange={changePage}
            forcePage={pageNo} 
            containerClassName={"pagination"}
            previousLinkClassName={"labelBtn"}
            nextLinkClassName={"labelBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"} 
          />
          <form className='form' onSubmit={onSubmit}>
            <input 
              className='formInput' 
              type='number' 
              placeholder={pageNo + 1 + ''} 
              value={inputPage} min='1' max={pageCount}
              onChange={(e) => setInputPage(e.target.value)}
            /> 
            <input className='formInput formSubmit' type='submit' value='Go'/>
          </form>
      </>
      : 
      <div className='starter'> 
        <h3>No users to show</h3>
        <Button text='View users' onClick={fetchPeople} />
      </div> }     
      <Footer/> 
    </div>
  )
}

export default App;
