export interface Location {
    image: string,
    licences: number,
    name: string,
    products: {
      monitoring: boolean,
      exams: boolean,
      applicationLibrary: boolean
    },
    enrollmentDate: number
  }