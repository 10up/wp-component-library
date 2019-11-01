import puppeteer from "puppeteer";

const APP = "example.html";
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Accessibility Tests', () => {

	test( 'Keyboard Functionality', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );

	}, 5000 );

} );

afterAll( () => {

	browser.close();

} );
