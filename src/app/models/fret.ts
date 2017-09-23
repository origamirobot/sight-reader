

/**
 * Fret positions on a fret board are calculated by dividing the scale
 * length minus the offset of the previous fret by 17.817.
 * http://www.liutaiomottola.com/formulae/fret.htm
 */
export const ruleOf18 = 17.817;



export class FretBoard {




}


export class Fret {


	distanceFromNut: number;
	distanceFromPrevFret: number;
	pixelsFromNut: number;
	pixelsFromPrevFret: number;

}

/**
 * Takes the scale length and the number of frets requested, and calculates their spacing
 * @param amount The amount of frets to generate
 * @param scaleLength The scale length of the instrument
 */
export function generateFrets(amount: number, scaleLength: number, pixelLength: number): Fret[] {
	let offset = 0;
	let frets = new Array<Fret>();
	const conversion = pixelLength / scaleLength;

	for (let i = 0; i < amount; i++) {
		let position = i + 1;
		let fret = new Fret();
		fret.distanceFromPrevFret = (scaleLength - position) / ruleOf18;
		fret.pixelsFromPrevFret = fret.distanceFromPrevFret * conversion;

		offset += fret.distanceFromPrevFret;
		fret.distanceFromNut = offset;
		fret.pixelsFromNut = fret.distanceFromNut * conversion;

		frets.push(fret);
	}
	return frets;
}
