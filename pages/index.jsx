import Nav from '../components/nav'
import Stats from '../components/Stats'
import WorldStats from '../components/WorldStats'

export default () => (
  <div className="min-h-screen bg-gray-100">
    <Nav />
    <div className="grid gap-3 mb-4">
      <div className="container mx-auto">
        <WorldStats />
      </div>
      <div className="container grid gap-3 mx-auto md:gap-2 md:px-0 md:grid-cols-2">
        <Stats country="Schweiz" countryCode="CH" />
        <Stats country="Deutschland" countryCode="DE" />
        <Stats country="Frankreich" countryCode="Fr" />
        <Stats country="Österreich" countryCode="AU" />
        <Stats country="Italien" countryCode="IT" />
        <Stats country="Lichtenstein" countryCode="LI" />
      </div>
    </div>
  </div>
)
