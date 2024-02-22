import {promises as fs} from 'fs'
import ScraperSinapi from './ScraperSinapi'

async function main() {
  const scraper = new ScraperSinapi()
  await scraper.init()
  await scraper.clickAcceptCookie()
  const list = JSON.stringify(await scraper.getAllFilesHref())

  fs.writeFile('sinapi.txt', list, 'utf-8', (error) => {
    if (error) throw error
  })

  return Response.json('Sinapi works!')
}

main()