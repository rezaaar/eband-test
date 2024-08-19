import { defineStore } from 'pinia'


export const useFlightStore = defineStore({
  id: 'flight',
  state: () => {
    return {
      flighData: [],
      date: new Date(),
    }
  },
  actions: {
    addFlight(data) {
      this.flighData.push(data)
    },

    setGate(gate, flightId) {
      const flight = this.flighData.find(flight => flight.id === flightId);
      flight.gate = gate;
    }
  },
  getters: {
    getFlightData() {
      if (this.flighData.length === 0) {
        // return 'No flight data available'
      }

      if (this.date !== new Date()) {
        this.date = new Date()

        const filteredFlights = this.flighData.filter(flight => {
          const departureDateTime = new Date(`${flight.date} ${flight.time}`);
          return departureDateTime > this.date;
        });

        if (filteredFlights.length === 0) {
          // All flights are past their departure time
          // You can delete the data here or perform other actions
          this.flighData = [];
          return filteredFlights
        } else {
          // Proceed with filtered flights
          filteredFlights.sort((a, b) => {
            return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
          });

          this.flighData = filteredFlights;
          return filteredFlights;
        }
      }
    },

    getNearestFlight() {
      // `${nearestFlight.date} ${nearestFlight.time}`

      if (this.date !== new Date()) {
        this.date = new Date()

        if (this.getFlightData.length === 0) {
          return null
        } else {
          const nearestFlight = this.getFlightData
            .map(flight => ({
              ...flight,
              departureDateTime: new Date(`${flight.date} ${flight.time}`)
            }))
            .map(flight => ({
              ...flight,
              timeDifference: Math.abs(new Date(`${flight.date} ${flight.time}`) - this.date)
            }))
            .sort((a, b) => a.timeDifference - b.timeDifference)[0];

          return nearestFlight
        }

      }
    }
  },
  persist: true
})
