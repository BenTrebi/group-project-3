import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <>
<<<<<<< HEAD
    <MDBContainer>
=======
    <MDBContainer className='mt-5'>

>>>>>>> 2170f2621e412a89a5a7adf5a22b40ce58b350a2
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard alignment='center' className='bg-dark text-white'>
            <MDBCardHeader  tag="h2">About</MDBCardHeader>
            <MDBCardBody>
              <p>A one-stop-shop for all that you and your team could need to vote on ideas, make come to decisions, or just make a bracket for March Madness.</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

<<<<<<< HEAD
    <MDBContainer>

=======
    <MDBContainer className='mt-4'>
>>>>>>> 2170f2621e412a89a5a7adf5a22b40ce58b350a2
      <MDBRow>

        <MDBCol md='6'>
            <MDBCard className='text-white mb-3 new-think'>
              <MDBCardBody>
                <MDBCardTitle>New Think</MDBCardTitle>
                <MDBBtn className='button'href='/think'>
                          Get Started
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>
        
        <MDBCol md='6'>
            <MDBCard className='text-white mb-3 new-think'>
              <MDBCardBody>
                <MDBCardTitle>View Syncs</MDBCardTitle>
                <MDBBtn className='button'href='/sync'>
                          Drip Drip
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>

      </MDBRow>

    </MDBContainer>
      
    </>

  )
}