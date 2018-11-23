export class Letter {
    public id: number;
    public commentary_url: string;
    public glyph: string; 
    public glyphfinal: string; 
    public nameheb: string;
    public namelat: string;
    public ollat1: string;
    public ollat2: string;
    public ollat3: string;
    public ollat4: string;

    constructor(
        id: number,
        commentary_url: string,
        glyph: string,
        glyphfinal: string,
        nameheb: string,
        namelat: string,
        ollat1: string,
        ollat2: string,
        ollat3: string,
        ollat4: string
        ) {
        this.id = id,
        this.commentary_url = commentary_url,
        this.glyph = glyph,
        this.glyphfinal = glyphfinal,
        this.nameheb = nameheb,
        this.namelat = namelat,
        this.ollat1 = ollat1,
        this.ollat2 = ollat2,
        this.ollat3 = ollat3,
        this.ollat4 = ollat4
    }
}