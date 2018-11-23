export class GrammarPoint {
    public grammarpoint_id: number;
    public grammarpoint_glyph: string;
    public grammarpoint_name: string;
    public grammarpoint_commentary: string;

    constructor(grammarpoint_id: number, grammarpoint_glyph: string, grammarpoint_name: string, grammarpoint_commentary: string) {
        this.grammarpoint_id = grammarpoint_id,
        this.grammarpoint_glyph = grammarpoint_glyph,
        this.grammarpoint_name = grammarpoint_name,
        this.grammarpoint_commentary = grammarpoint_commentary
    }
}