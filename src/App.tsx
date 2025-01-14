import { useEffect, useState } from 'react'
import './App.css'
import jona from './assets/jona.png'

function App() {
  interface Upgrade {
    name: string
    description: string
    price: number
    perm: boolean
  }

  const [count, setCount] = useState<number>(0)
  const [upgrades, setUpgrades] = useState<Upgrade[]>([])
  const [prestige, setPrestige] = useState<number>(0)
  const [prestigeNeeded, setPrestigeNeeded] = useState<number>(10000000)
  const [canPrestige, setCanPrestige] = useState<boolean>(false)
  const [availableUpgrades, setAvailableUpgrades] = useState<Upgrade[]>([
    {
      name: 'AntiCheat Bypass',
      description: 'Allows you to click twice as fast!',
      price: 25,
      perm: true,
    },
    {
      name: 'Grandma',
      description: "A grandma's average cps is 2!",
      price: 50,
      perm: false,
    },
    {
      name: 'Farm',
      description: 'Farms MMC players for clicks. Average cps is 4!',
      price: 200,
      perm: false,
    },
    {
      name: 'Jitter',
      description:
        'Jitter clicking can be quite good. But ur not good at it. Average cps is 8!',
      price: 1000,
      perm: false,
    },
    {
      name: 'Jona',
      description: 'Jona can click faster than you can. Average cps is 14!',
      price: 10000,
      perm: false,
    },
    {
      name: 'Balls',
      description:
        "It's a new clicking method invented by Jona himself. It can do around 20 cps!",
      price: 50000,
      perm: false,
    },
    {
      name: 'Autoclicker',
      description: 'Autoclickers are the best. This one can click 28 cps!',
      price: 100000,
      perm: false,
    },
    {
      name: 'OP Autoclicker',
      description: 'OP Autoclickers are even better! Average cps is 56!',
      price: 1000000,
      perm: false,
    },
    {
      name: 'God',
      description:
        'You prayed to God and he granted you the power of clicking! He can click 150 cps!',
      price: 100000000,
      perm: false,
    },
    {
      name: 'Satan',
      description:
        "God didn't help enough, so you went to a darker place... He can click 666 cps!",
      price: 1000000000,
      perm: false,
    },
    {
      name: 'Herobrine',
      description:
        'How did you find him? Anyways, he can click 100,000,000 cps!',
      price: 10000000000,
      perm: false,
    },
  ])

  useEffect(() => {
    try {
      setPrestige(
        localStorage.getItem('prestige')
          ? parseInt(localStorage.getItem('prestige') as string)
          : 0
      )
      setPrestigeNeeded(
        localStorage.getItem('prestigeNeeded')
          ? parseInt(localStorage.getItem('prestigeNeeded') as string)
          : 10000000
      )
      setUpgrades(JSON.parse(localStorage.getItem('upgrades') as string) || [])
      setCount(
        localStorage.getItem('count')
          ? parseInt(localStorage.getItem('count') as string)
          : 0
      )
    } catch (e) {}
  }, [])

  useEffect(() => {
    if (window.name === 'avi-go') {
      setAvailableUpgrades((a) => [...a, aviEgozimUpgrade])
    }
  }, [window.name])

  function doPrestige() {
    window.name = ''
    setCanPrestige(false)
    setPrestige((p) => p + 1)
    setCount(0)
    setPrestigeNeeded((p) => p * prestigeMultiplier)
    setUpgrades([])
    window.location.reload()
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    localStorage.setItem('count', count.toString())
    localStorage.setItem('prestige', prestige.toString())
    localStorage.setItem('prestigeNeeded', prestigeNeeded.toString())
    localStorage.setItem('upgrades', JSON.stringify(upgrades))

    if (count >= prestigeNeeded) {
      if (!canPrestige) setCanPrestige(true)
    }
  }, [count, prestige, prestigeNeeded, upgrades])

  const prestigeMultiplier = 5

  window.addEventListener('selectstart', (e) => {
    e.preventDefault()
  })

  let interval: any

  useEffect(() => {
    clearInterval(interval)
    interval = setInterval(() => {
      const multiplier = prestige === 0 ? 5 : prestigeMultiplier * prestige
      setCount(
        (c) =>
          c + upgrades.filter((u) => u.name === 'Grandma').length * multiplier
      ) // 2 cps
      setCount(
        (c) =>
          c + upgrades.filter((u) => u.name === 'Farm').length * 4 * multiplier
      ) // 4 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Jitter').length * 6 * multiplier
      ) // 8 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Jona').length *
            4 *
            1.75 *
            multiplier
      ) // 14 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Balls').length * 10 * multiplier
      ) // 20 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Autoclicker').length *
            4 *
            1.75 *
            2 *
            multiplier
      ) // 28 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'OP Autoclicker').length *
            4 *
            1.75 *
            2 *
            2 *
            multiplier
      ) // 56 cps
      setCount(
        (c) =>
          c + upgrades.filter((u) => u.name === 'God').length * 75 * multiplier
      ) // 150 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Satan').length *
            75 *
            2 *
            2 *
            1.11 *
            multiplier
      ) // 666 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Herobrine').length *
            50000000 *
            multiplier
      ) // 100,000,000 cps
      setCount(
        (c) =>
          c +
          upgrades.filter((u) => u.name === 'Avi Egozim').length *
            5e16 *
            multiplier
      ) // 100,000,000,000,000 cps
    }, 500)
  }, [upgrades])

  const aviEgozimUpgrade: Upgrade = {
    name: 'Avi Egozim',
    description:
      'Avi Egozim is the best. He can click 100,000,000,000,000,000 cps!', // 100 quadrillion cps
    price: 0,
    perm: true,
  }

  return (
    <div>
      <button
        onClick={() => {
          const double: number =
            upgrades.filter((u) => u.name === 'AntiCheat Bypass').length > 0
              ? 2
              : 1
          setCount((c) => c + 1 * double)
        }}
      >
        <img src={jona} alt="jona" width={200} />
      </button>
      <button
        style={{}}
        className="resetButton"
        onClick={() => {
          setCount(0)
          setPrestige(0)
          setPrestigeNeeded(10000000)
          setUpgrades([])
          window.location.reload()
        }}
      >
        RESET
      </button>
      <button
        className="prestigeButton"
        onClick={doPrestige}
        disabled={!canPrestige}
      >
        PRESTIGE
      </button>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          textAlign: 'left',
          paddingLeft: '2em',
          fontSize: '1.2em',
        }}
      >
        <br />
        Prestige: {numberWithCommas(prestige)}
        <br />
        Next Prestige Requires: {numberWithCommas(prestigeNeeded)}
        <br />
      </div>
      <br />
      <div>
        <h1>{numberWithCommas(count)}</h1>
      </div>
      <div
        style={{
          overflowY: 'scroll',
          height: '50vh',
          width: '50vw',
          backgroundColor: 'rgb(63, 63, 63)',
        }}
        className="card"
      >
        {availableUpgrades.map((upgrade) => (
          <div key={upgrade.name}>
            <button
              onClick={() => {
                if (count >= upgrade.price) {
                  let eligible = true
                  if (upgrade.perm)
                    eligible =
                      upgrades.filter((u) => u.name === upgrade.name).length ===
                      0
                  if (eligible) {
                    setUpgrades([
                      ...upgrades,
                      {
                        name: upgrade.name,
                        description: upgrade.description,
                        price: upgrade.price,
                        perm: upgrade.perm,
                      },
                    ])
                    setCount((c) => c - upgrade.price)
                  }
                }
              }}
              style={{ marginBottom: '10px' }}
              className="card"
              disabled={count < upgrade.price}
              hidden={
                upgrade.perm &&
                upgrades.filter((u) => u.name === upgrade.name).length > 0
              }
            >
              <h2>
                {upgrade.name}{' '}
                {!upgrade.perm &&
                  numberWithCommas(
                    upgrades.filter((u) => u.name === upgrade.name).length
                  )}
              </h2>
              <h4>{upgrade.description}</h4>
              <p>Cost: {numberWithCommas(upgrade.price)} clicks</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
