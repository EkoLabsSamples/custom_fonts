import EkoUIComponents from 'EkoUIComponents'

import playerOptions from '../config/playerOptions.json';
import '../assets/fonts/fonts.scss';
import Typography from './components/typography/Typography'

export default {
    onLoad: function(ctx) { },

    onInit: function(player, ctx) {
        
        player.ui.add('topPanel', EkoUIComponents.EkoGroup, {
            shouldShow: ()=>true,
            children: [
                {
                    id: 'typography',
                    component: Typography,
                    props: {}
                }
            ]
        });
    },

    playerOptions
};
