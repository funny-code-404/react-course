import Form from './Form'
import Table from './Table'
import React from 'react';


class Parent extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            Parentnumber: '',
            Parentbrand: '',
            Parentmodel: '',
            Parentyear: '',
            Parentcost: '',
         },
      }
   }
   updateChild = (brand, model, year, cost) => {
      this.setState(prevState => ({
         ...prevState,
         data: {
            Parentbrand: brand,
            Parentmodel: model,
            Parentyear: year,
            Parentcost: cost,
         }
      }))
   }

   getRandomInt = () => {
      return Math.random();
   }
   // Не делал на Pure, ибо решил отработать для себя работу и передачу функций/методов

   render() {
      const { data: { Parentbrand, Parentmodel, Parentyear, Parentcost } } = this.state
      return (
         <>
            <Table 
               number={this.getRandomInt()}
               brand={Parentbrand}
               model={Parentmodel}
               year={Parentyear}
               cost={Parentcost}
            />
            <Form 
               updateChild={this.updateChild}
            />
         </>
      )
   }
}

export default Parent