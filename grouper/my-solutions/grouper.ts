type PartyByAge = Record<number, string[]>

export function peopleCounter(people: { age: number; name: string }[]): PartyByAge {
  const partyByAge: PartyByAge = {}
  people.forEach(person => {
    if (partyByAge[person.age] === undefined) {
      partyByAge[person.age] = []
      partyByAge[person.age].push(person.name)
    } else {
    }
  }, {})
  return partyByAge
}
