<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Poster;
use App\Entity\UserVote;
use App\Repository\UserVoteRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VotingController extends AbstractController
{
    /**
     * @Route("/voting", name="voting")
     */
    public function index(): Response
    {
        return $this->json(['id' => null, 'poster' => null, 'event' => null ]);
    }

    /**
     * @Route("/voting/track", name="voting_track")
     * @Cache(expires="today + 1 year", maxage=31536000)
     */
    public function track(Request $request, UserVoteRepository $repository): Response
    {

        $sid = $request->headers->get("If-None-Match") ?? $request->headers->get("if-none-match") ?? $request->headers->get("IF-NONE-MATCH") ?? $_COOKIE['sid'] ?? "";
        $ifModifiedSince = $request->headers->get("If-Modified-Since") ?? $request->headers->get("if-modified-since") ?? $request->headers->get("IF-MODIFIED-SINCE");

        if( UserVote::validateSession($sid) ) {
            session_start();
            $_SESSION['sid'] = $sid;
            return new Response(null, 304);
        } else if( $ifModifiedSince ) {
            return new Response(null, 304);
        } else {
            $sessionID = UserVote::generateUUID();
            $_SESSION['sid'] = $sessionID;
            $expires = gmdate("M d Y H:i:s",  mktime(0, 0, 0, date("m"),   date("d"),   date("Y")+1));
            $cookieStr = "sid=$sessionID;max-age=31536000;expires=$expires GMT;samesite=strict;secure=false";

            $response = new Response(
                //
<<<SCRIPT
var now = new Date();

window.__sid = "$sessionID"; // Server generated

document.cookie = "$cookieStr"  ;

if( "localStorage" in window ) {
  window.localStorage.setItem("sid", window.__sid);
}

SCRIPT);
            $response->setPublic();
            $response->setSharedMaxAge(31536000);
            $response->setMaxAge(31536000);
            $response->setLastModified(new \DateTime('today - 6 months'));
            $response->setEtag($sessionID);
            $response->setExpires(new \DateTime('today + 1 year'));
            $response->headers->addCacheControlDirective('must-revalidate', true);
            $response->headers->set('Content-Type', 'application/javascript; charset=utf-8');
            return $response;
        }


//



    }

    /**
     * @Route("/voting/poster/{poster}", name="voting_poster")
     */
    public function votingPoster(Poster $poster, Request $request, UserVoteRepository $repository): Response
    {
        $sid = $_SESSION['sid'] ?? UserVote::generateUUID();
        $newVote = new UserVote($sid);
        $existentVote = $repository->findBy(['userId' => $sid, 'poster' => $poster]);

        if(!$existentVote)
        {
            $newVote->setPoster($poster);
            $this->getDoctrine()->getManager()->persist($newVote);
            $this->getDoctrine()->getManager()->flush();
        }
        return $this->json(['id' => $newVote->getId(), 'poster' => $poster->getId()]);
    }

    /**
     * @Route("/voting/event/{id]", name="voting_event")
     */
    public function votingEvent(Event $event, Request $request): Response
    {
        return $this->json(['id' => null, 'poster' => null, 'event' => null ]);
    }
}
