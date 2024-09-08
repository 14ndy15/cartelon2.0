<?php

namespace App\Entity;

use App\Repository\UserVoteRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserVoteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class UserVote
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private $id;

    #[ORM\Column(type: "string", length: 255)]
    private $userId;

    #[ORM\ManyToOne(targetEntity: Poster::class)]
    private $poster;

    #[ORM\ManyToOne(targetEntity: Event::class)]
    private $event;

    #[ORM\Column(type: "datetime_immutable")]
    private $updatedAt;

    /**
     * UserVote constructor.
     */
    public function __construct($userId = null)
    {
        $this->userId = $userId;
        $this->updatedAt = new \DateTimeImmutable('now');
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?string
    {
        return $this->userId;
    }

    public function setUserId(string $userId): self
    {
        $this->userId = $userId;

        return $this;
    }

    public function getPoster(): ?Poster
    {
        return $this->poster;
    }

    public function setPoster(?Poster $poster): self
    {
        $this->poster = $poster;

        return $this;
    }

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    #[ORM\PrePersist()]
    #[ORM\PreUpdate()]
    public function updateTimestamp()
    {
        $this->updatedAt = new \DateTimeImmutable('now');
    }

    public static function generateUUID()
    {
        return md5($_SERVER['HTTP_ACCEPT_LANGUAGE']
            .$_SERVER['HTTP_USER_AGENT']
            .$_SERVER['REMOTE_ADDR']);
    }

    public static function validateSession($string): bool
    {
        return $string === self::generateUUID();
    }
}
