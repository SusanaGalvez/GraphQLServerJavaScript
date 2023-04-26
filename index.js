import { ApolloServer, gql } from "apollo-server"
const persons=[
    {name:"Susana",
    phone:"676235676",
    street: "C/Navarra",
    city: "malaga",
    id:"1"
    },
    {name:"Virginia",
    phone:"676235676",
    street: "C/Navarra",
    city: "malaga",
    id:"2"
    },
    {name:"Mireia",
    phone:"676235676",
    street: "C/Navarra",
    city: "malaga",
    id:"3",
    },
    {name:"Claudia",
    phone:"676235676",
    street: "C/Navarra",
    city: "malaga",
    id:"4"
    },
]
// La ! significa que es un campo requerido,
// Estos son las definiciones de los datos que queremos
const typeDefinitions = gql`
type Person{
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
}
type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
}
`
// Como puede resolver estos datos
const resolvers = {
    Query:{
        personCount:()=> persons.length,
        allPersons:()=> persons,
        findPerson: (root, args)=>{
            const{name} = args
            return persons.find(person =>person.name === name)
        }
    }
}

//Creamos nuestros servidor
const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})
//Iniciamos el servidor
server.listen().then(({url}) =>{
    console.log(`Server ready at ${url}`)
})

