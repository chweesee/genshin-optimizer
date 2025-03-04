import { TalentSheetElementKey } from '../CharacterSheet'
import banner from './Banner.png'
import burst from './burst.png'
import card from './Character_Dori_Card.jpg'
import constellation1 from './constellation1.png'
import constellation2 from './constellation2.png'
import constellation3 from './constellation3.png'
import constellation4 from './constellation4.png'
import constellation5 from './constellation5.png'
import constellation6 from './constellation6.png'
import thumb from './Icon.png'
import thumbSide from './IconSide.png'
import passive1 from './passive1.png'
import passive2 from './passive2.png'
import passive3 from './passive3.png'
import skill from './skill.png'

const talentAssets: Partial<Record<TalentSheetElementKey, string>> = {
  constellation1, constellation2, constellation3, constellation4, constellation5, constellation6, skill, burst, passive1, passive2, passive3
}

export { card, thumb, thumbSide, banner, talentAssets }
