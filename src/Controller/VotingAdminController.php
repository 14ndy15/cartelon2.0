<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Poster;
use App\Entity\UserVote;
use App\Repository\UserVoteRepository;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AdminController;
use EasyCorp\Bundle\EasyAdminBundle\Controller\EasyAdminController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VotingAdminController extends EasyAdminController
{
    protected function listUserVoteAction()
    {
        $votes = $this->getDoctrine()->getManager()->getRepository('App:UserVote')->findAll();

        $posters = [];
        $orderedPosters = [];
        foreach ($votes as $vote)
        {
            if($vote->getPoster() !== null)
            {
                if(isset($posters[$vote->getPoster()->getId()]) === false)
                $posters[$vote->getPoster()->getId()] = [
                    'author' => $vote->getPoster()->getAuthor(),
                    'event' => $vote->getPoster()->getAssociateEvent(),
                    'image' =>  $vote->getPoster()->getWebPath(),
                    'votes' => 1
                    ];
                else $posters[$vote->getPoster()->getId()]['votes']++;

            }
        }

        usort($posters, function($a, $b ) {
            if ($a['votes'] == $b['votes']) {
                return 0;
            }
            return ($a['votes'] > $b['votes']) ? -1 : 1;
        });
        return $this->render('admin/uservotes.html.twig', ['postersVote' => $posters]);
    }
}
